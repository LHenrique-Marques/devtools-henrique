'use client';

type ResultadoProps = {
  resultados: { label: string; valor: string | false | null }[];
};

export default function Resultado({ resultados }: ResultadoProps) {
  const filtrados = resultados.filter((r) =>r && r.valor);

  if (filtrados.length === 0) return null;

  return (
    <div className="border-t border-neutral-700 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
      {filtrados.map((r, i) => (
        <div
          key={i}
          className="bg-neutral-900 rounded-xl p-4 border border-neutral-700"
        >
          <p className="text-neutral-400 mb-1">{r.label}</p>
          <p className="text-2xl font-bold">{r.valor}</p>
        </div>
      ))}
    </div>
  );
}
