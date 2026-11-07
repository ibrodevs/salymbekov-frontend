import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../api';

export default function AnonymousMessageForm() {
  const { t } = useTranslation();
  const [state, setState] = useState('idle');
  const locked = useRef(false);
  const copy = (key) => t(`anonymousMessage.${key}`);
  async function submit(event) {
    event.preventDefault();
    if (locked.current) return;
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    locked.current = true;
    setState('sending');
    try {
      await apiRequest('/site/anonymous-message/', { method: 'POST', body: JSON.stringify(payload) });
      form.reset();
      setState('success');
    } catch (error) {
      setState(error.status === 429 ? 'limited' : 'error');
    } finally {
      locked.current = false;
    }
  }
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6" aria-labelledby="anonymous-title">
      <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-10">
        <h2 id="anonymous-title" className="text-3xl font-bold text-[#023E8A]">{copy('title')}</h2>
        <form onSubmit={submit} className="mt-6 space-y-5">
          {['subject', 'message', 'name', 'email'].map((field) => (
            <div key={field}>
              <label htmlFor={`anonymous-${field}`} className="mb-2 block font-medium text-slate-800">{copy(field)}{['subject','message'].includes(field) ? ' *' : ''}</label>
              {field === 'message' ? (
                <textarea id={`anonymous-${field}`} name={field} required maxLength={5000} rows={7} className="w-full rounded-xl border border-slate-300 p-3" />
              ) : (
                <input id={`anonymous-${field}`} name={field} type={field === 'email' ? 'email' : 'text'} required={field === 'subject'} maxLength={field === 'subject' ? 200 : field === 'name' ? 120 : 254} className="w-full rounded-xl border border-slate-300 p-3" />
              )}
            </div>
          ))}
          <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <button disabled={state === 'sending'} className="rounded-xl bg-[#023E8A] px-6 py-3 font-semibold text-white disabled:opacity-60" type="submit">{copy(state === 'sending' ? 'sending' : 'send')}</button>
          <div role="status" aria-live="polite">{['success','error','limited'].includes(state) ? copy(state) : ''}</div>
        </form>
        <p className="mt-6 leading-7 text-slate-600">{copy('explanation')}</p>
        <p className="mt-3 text-sm leading-6 text-slate-500">{copy('privacy')}</p>
      </div>
    </section>
  );
}
