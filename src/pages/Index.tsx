import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModalVerbCard } from "@/components/ModalVerbCard";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ScoreDisplay } from "@/components/ScoreDisplay";
import { modalVerbs, exercises } from "@/data/modalVerbs";
import { BookOpen, Brain, Trophy, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [selectedVerb, setSelectedVerb] = useState(modalVerbs[0]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const resetExercises = () => {
    setCurrentExercise(0);
    setScore(0);
    setAnsweredQuestions(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <img 
          src={heroImage} 
          alt="Educational background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-white animate-float" />
              <h1 className="text-5xl font-bold text-white">
                Modal Verbs Master
              </h1>
              <Sparkles className="h-8 w-8 text-white animate-float" />
            </div>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Master Can, Could, May, Might, Must, Should, Will, and Would through 
              interactive exercises and comprehensive practice activities.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                8 Modal Verbs
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Trophy className="h-4 w-4 mr-2" />
                Interactive Practice
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="learn" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Learn
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Practice
            </TabsTrigger>
          </TabsList>

          {/* Learn Tab */}
          <TabsContent value="learn" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Modal Verbs Reference</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any modal verb to see detailed information about its usage, meaning, and examples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modalVerbs.map((verb) => (
                <ModalVerbCard
                  key={verb.verb}
                  {...verb}
                  onClick={() => setSelectedVerb(verb)}
                  isSelected={selectedVerb.verb === verb.verb}
                />
              ))}
            </div>

            {/* Detailed Information */}
            <Card className="p-8 bg-gradient-card shadow-soft max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {selectedVerb.verb}
                  </h3>
                  <Badge variant="secondary" className="text-sm">
                    {selectedVerb.level}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Meaning:</h4>
                      <p className="text-muted-foreground">{selectedVerb.meaning}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Usage:</h4>
                      <p className="text-muted-foreground">{selectedVerb.usage}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Example:</h4>
                      <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                        <p className="text-foreground italic">"{selectedVerb.example}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Practice Exercises</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Test your knowledge with interactive exercises. Choose the correct modal verb for each situation.
              </p>
            </div>

            {/* Progress Display */}
            <div className="flex items-center justify-center">
              <ScoreDisplay score={score} total={answeredQuestions || 1} />
            </div>

            {/* Exercise */}
            {currentExercise < exercises.length ? (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">
                    Question {currentExercise + 1} of {exercises.length}
                  </Badge>
                  <div className="w-full max-w-xs bg-muted rounded-full h-2 ml-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
                    />
                  </div>
                </div>

                <ExerciseCard
                  key={exercises[currentExercise].id}
                  {...exercises[currentExercise]}
                  onAnswer={handleAnswer}
                />

                <div className="flex justify-center">
                  <Button 
                    onClick={nextExercise}
                    className="px-8"
                    disabled={answeredQuestions <= currentExercise}
                  >
                    Next Question
                  </Button>
                </div>
              </div>
            ) : (
              /* Completion Screen */
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="space-y-4">
                  <Trophy className="h-16 w-16 text-primary mx-auto animate-bounce-gentle" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Congratulations! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    You've completed all the exercises!
                  </p>
                </div>

                <ScoreDisplay score={score} total={exercises.length} />
                
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetExercises} variant="outline">
                    Practice Again
                  </Button>
                  <Button onClick={() => window.location.reload()}>
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;