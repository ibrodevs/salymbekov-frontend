import { useTranslation } from 'react-i18next';

function ScientificTechnicalCouncil(props) {
  const { t } = useTranslation();

  // безопасно получить задачи из локали: поддерживаем массив/объект/строку
  const rawTasks = t('science.management.scientificCouncil.tasks', { returnObjects: true });
  let tasks = [];
  if (Array.isArray(rawTasks)) {
    tasks = rawTasks;
  } else if (rawTasks && typeof rawTasks === 'object') {
    // если это объект с ключами, используем значения
    tasks = Object.values(rawTasks);
  } else if (rawTasks) {
    // если это строка — оборачиваем в массив
    tasks = [String(rawTasks)];
  }
  if (!Array.isArray(tasks) || tasks.length === 0) {
    console.warn('Warning: science.management.scientificCouncil.tasks is not an array or is empty', rawTasks);
  }

  return (
    <section className="scientific-council">
      <h1>{t('science.management.scientificCouncil.title')}</h1>
      {/* ...other markup... */}
      {Array.isArray(tasks) && tasks.map((task, i) => (
        <div key={i} className="task">
          {typeof task === 'string' ? (
            <p>{task}</p>
          ) : (
            // если task — объект: поддерживаем разные форматы (title/description)
            <>
              {task.title && <strong>{task.title}</strong>}
              {task.description && <p>{task.description}</p>}
              {!task.title && !task.description && <pre>{JSON.stringify(task)}</pre>}
            </>
          )}
        </div>
      ))}
      {/* fallback если нет задач */}
      {!Array.isArray(tasks) || tasks.length === 0 ? (
        <p className="no-tasks">{t('science.management.scientificCouncil.noTasks', 'Нет задач')}</p>
      ) : null}
    </section>
  );
}

export default ScientificTechnicalCouncil;