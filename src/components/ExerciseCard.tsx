import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface ExerciseOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface ExerciseCardProps {
  question: string;
  options: ExerciseOption[];
  explanation?: string;
  onAnswer: (isCorrect: boolean) => void;
}

export const ExerciseCard = ({ 
  question, 
  options, 
  explanation, 
  onAnswer 
}: ExerciseCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const handleOptionSelect = (option: ExerciseOption) => {
    if (showResult) return;
    
    setSelectedOption(option.id);
    setShowResult(true);
    onAnswer(option.isCorrect);
  };

  const getOptionStyle = (option: ExerciseOption) => {
    if (!showResult) return "border-border hover:border-primary";
    
    if (option.isCorrect) return "border-success bg-success/10";
    if (selectedOption === option.id && !option.isCorrect) return "border-error bg-error/10";
    return "border-border opacity-50";
  };

  const getOptionIcon = (option: ExerciseOption) => {
    if (!showResult) return null;
    
    if (option.isCorrect) return <CheckCircle2 className="h-5 w-5 text-success" />;
    if (selectedOption === option.id && !option.isCorrect) return <XCircle className="h-5 w-5 text-error" />;
    return null;
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground leading-relaxed">
          {question}
        </h3>
        
        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-between ${getOptionStyle(option)}`}
              onClick={() => handleOptionSelect(option)}
            >
              <span className="font-medium text-foreground">{option.text}</span>
              {getOptionIcon(option)}
            </div>
          ))}
        </div>
        
        {showResult && explanation && (
          <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
            <div className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{explanation}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};