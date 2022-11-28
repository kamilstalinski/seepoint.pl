export default function ProductSpecs({ type }) {
  return (
    <div className='specs'>
      <h2>Specyfikacja</h2>
      <p>{type.description}</p>
    </div>
  );
}
