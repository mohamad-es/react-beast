import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "../card";

type props = {
  orientation?: "horizontal" | "vertical" | undefined;
  carouselContentClassName?: string | undefined;
  carouselItemClassName?: string | undefined;
};

export function CarouselDemo({ orientation, carouselItemClassName, carouselContentClassName }: props) {
  return (
    <Carousel orientation={orientation} className="w-full">
      <CarouselContent className={carouselContentClassName}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className={`${carouselItemClassName}`} key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
