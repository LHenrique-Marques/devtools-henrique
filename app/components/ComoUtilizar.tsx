'use client';

type ComoUtilizarProps = {
  titulo?: string;
  itens: string[];
};

export default function ComoUtilizar({ titulo = '❓ Como utilizar', itens }: ComoUtilizarProps) {
  return (
    <div className="border-t border-neutral-700 pt-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">{titulo}</h2>
      <ul className="list-disc list-inside text-neutral-400 space-y-2">
        {itens.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  );
}
