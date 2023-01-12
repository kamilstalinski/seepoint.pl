export default function ProductSpecs({ type, t }) {
  return (
    <div className='specs'>
      <h2>{t("spec")}</h2>
      <p>{type.description}</p>
    </div>
  );
}
