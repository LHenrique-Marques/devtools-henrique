'use client';

type BotaoProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function Botao({ children, onClick, disabled = false }: BotaoProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-purple-500'
      } bg-purple-600 border border-purple-700 rounded-xl px-4 py-2 transition text-white`}
    >
      {children}
    </button>
  );
}

export function GrupoBotoes({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-4 mb-6">{children}</div>;
}
