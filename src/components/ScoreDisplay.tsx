import { Trophy, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ScoreDisplayProps {
  score: number;
  total: number;
}

export const ScoreDisplay = ({ score, total }: ScoreDisplayProps) => {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreColor = () => {
    if (percentage >= 90) return "success";
    if (percentage >= 70) return "warning";
    return "error";
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 70) return "Good job!";
    if (percentage >= 50) return "Keep practicing!";
    return "Try again!";
  };

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-card shadow-soft">
      <div className="flex items-center gap-2">
        {percentage >= 90 ? (
          <Trophy className="h-5 w-5 text-success" />
        ) : (
          <Star className="h-5 w-5 text-primary" />
        )}
        <span className="text-lg font-semibold text-foreground">
          {score}/{total}
        </span>
      </div>
      
      <Badge variant={getScoreColor() === "success" ? "default" : "secondary"}>
        {percentage}%
      </Badge>
      
      <span className="text-sm font-medium text-muted-foreground">
        {getScoreMessage()}
      </span>
    </div>
  );
};