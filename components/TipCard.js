// components/TipCard.js
export default function TipCard({ title, description }) {
    return (
      <div className="bg-charcoal text-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    );
  }
  