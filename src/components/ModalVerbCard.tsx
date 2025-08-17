import { Card } from "@/components/ui/card";

interface ModalVerbCardProps {
  verb: string;
  meaning: string;
  example: string;
  usage: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export const ModalVerbCard = ({ 
  verb, 
  meaning, 
  example, 
  usage, 
  onClick,
  isSelected = false 
}: ModalVerbCardProps) => {
  return (
    <Card 
      className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-primary shadow-hover bg-gradient-primary text-white' : 'bg-gradient-card'
      }`}
      onClick={onClick}
    >
      <div className="space-y-3">
        <h3 className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-primary'}`}>
          {verb}
        </h3>
        
        <p className={`text-sm font-medium ${isSelected ? 'text-white/90' : 'text-muted-foreground'}`}>
          {meaning}
        </p>
        
        <div className="space-y-2">
          <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-foreground'}`}>
            <span className="font-medium">Usage:</span> {usage}
          </p>
          
          <p className={`text-sm italic ${isSelected ? 'text-white/80' : 'text-muted-foreground'}`}>
            <span className="font-medium not-italic">Example:</span> {example}
          </p>
        </div>
      </div>
    </Card>
  );
};