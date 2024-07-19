interface PromptProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const Prompt = ({ value, onValueChange }: PromptProps) => {
  return (
    <input value={value} onChange={(e) => onValueChange(e.target.value)} />
  );
};
