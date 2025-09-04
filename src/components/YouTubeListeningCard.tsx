import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, X, Music, Play } from "lucide-react";

interface LyricLine {
  line: string;
  blanks: {
    position: number;
    answer: string;
    explanation?: string;
  }[];
}

interface YouTubeListeningCardProps {
  question: string;
  youtubeId: string;
  lyrics: LyricLine[];
  onAnswer: (isCorrect: boolean) => void;
}

export const YouTubeListeningCard = ({ 
  question, 
  youtubeId, 
  lyrics, 
  onAnswer 
}: YouTubeListeningCardProps) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (blankIndex: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [blankIndex]: value.toLowerCase().trim()
    }));
  };

  const handleSubmit = useCallback(() => {
    if (submitted) return;

    const allBlanks = lyrics.flatMap(line => line.blanks);
    let correctCount = 0;

    allBlanks.forEach((blank, index) => {
      if (answers[index]?.toLowerCase() === blank.answer.toLowerCase()) {
        correctCount++;
      }
    });

    const isAllCorrect = correctCount === allBlanks.length;
    setShowResults(true);
    setSubmitted(true);
    onAnswer(isAllCorrect);
  }, [answers, lyrics, onAnswer, submitted]);

  const renderLyricLine = (lyricLine: LyricLine, lineIndex: number) => {
    if (lyricLine.blanks.length === 0) {
      return (
        <div key={lineIndex} className="text-muted-foreground py-1">
          {lyricLine.line}
        </div>
      );
    }

    const parts = lyricLine.line.split('___');
    let blankCounter = 0;

    return (
      <div key={lineIndex} className="text-muted-foreground py-1 flex flex-wrap items-center gap-2">
        {parts.map((part, partIndex) => (
          <span key={partIndex} className="flex items-center gap-2">
            <span>{part}</span>
            {partIndex < parts.length - 1 && (
              <div className="relative inline-flex items-center">
                <Input
                  className="w-20 h-8 text-center text-sm"
                  value={answers[blankCounter] || ''}
                  onChange={(e) => handleInputChange(blankCounter, e.target.value)}
                  disabled={submitted}
                  placeholder="___"
                />
                {showResults && (
                  <div className="absolute -right-8 top-0">
                    {answers[blankCounter]?.toLowerCase() === 
                     lyricLine.blanks[blankCounter - lineIndex * lyricLine.blanks.length]?.answer.toLowerCase() ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                )}
                {(() => { blankCounter++; return null; })()}
              </div>
            )}
          </span>
        ))}
      </div>
    );
  };

  const allBlanks = lyrics.flatMap(line => line.blanks);
  const allAnswered = allBlanks.every((_, index) => answers[index]?.trim());

  return (
    <Card className="p-6 space-y-6 bg-gradient-card shadow-soft">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Music className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">{question}</h3>
        </div>

        {/* YouTube Video */}
        <div className="aspect-video rounded-lg overflow-hidden bg-muted">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Instructions */}
        <div className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <Play className="h-4 w-4 text-primary" />
          <p className="text-sm text-muted-foreground">
            Listen to the song and fill in the blanks with the correct modal verbs
          </p>
        </div>

        {/* Lyrics with blanks */}
        <div className="space-y-2 p-4 bg-muted/30 rounded-lg border font-mono text-sm leading-relaxed">
          {lyrics.map((line, index) => renderLyricLine(line, index))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            onClick={handleSubmit}
            disabled={!allAnswered || submitted}
            className="px-8"
          >
            {submitted ? 'Submitted' : 'Check Answers'}
          </Button>
        </div>

        {/* Results and Explanations */}
        {showResults && (
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg border">
            <h4 className="font-semibold text-foreground">Results & Explanations:</h4>
            {allBlanks.map((blank, index) => {
              const userAnswer = answers[index]?.toLowerCase();
              const correctAnswer = blank.answer.toLowerCase();
              const isCorrect = userAnswer === correctAnswer;

              return (
                <div key={index} className="flex items-start gap-3 p-3 bg-background rounded border">
                  {isCorrect ? (
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant={isCorrect ? "default" : "destructive"}>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Your answer: <span className="font-medium">{userAnswer || '(no answer)'}</span>
                        {!isCorrect && (
                          <span> → Correct: <span className="font-medium text-green-600">{blank.answer}</span></span>
                        )}
                      </span>
                    </div>
                    {blank.explanation && (
                      <p className="text-sm text-muted-foreground">{blank.explanation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};