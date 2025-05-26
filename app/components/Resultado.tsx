'use client';

type ResultadoProps = {
  resultados: { label: string; valor: string | false | null }[];
};

export default function Resultado({ resultados }: ResultadoProps) {
  const filtrados = resultados.filter((r) =>r && r.valor);

  if (filtrados.length === 0) return null;

  return (
    <div>
      {filtrados.map((r, i) => (
        <div
          key={i}
        >
          <p className="text-neutral-400 mb-1">{r.label}</p>
          <p className="text-2xl font-bold">{r.valor}</p>
        </div>
      ))}
    </div>
  );
}
