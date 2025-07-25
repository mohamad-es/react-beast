import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>جمع فروش</CardDescription>
          <CardTitle className="text-2xl alibaba-bold font-medium tabular-nums @[250px]/card:text-3xl">
            1,250.00 <span className="text-gray-400 text-lg alibaba-regular"> تومان</span>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            این ماه روند افزایشی داشته اید
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">جمع فروش 6 ماه گذشته</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>جمع فروش</CardDescription>
          <CardTitle className="text-2xl alibaba-bold font-medium tabular-nums @[250px]/card:text-3xl">
            1,250.00 <span className="text-gray-400 text-lg alibaba-regular"> تومان</span>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            این ماه روند افزایشی داشته اید
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">جمع فروش 6 ماه گذشته</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>جمع فروش</CardDescription>
          <CardTitle className="text-2xl alibaba-bold font-medium tabular-nums @[250px]/card:text-3xl">
            1,250.00 <span className="text-gray-400 text-lg alibaba-regular"> تومان</span>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            این ماه روند افزایشی داشته اید
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">جمع فروش 6 ماه گذشته</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>جمع فروش</CardDescription>
          <CardTitle className="text-2xl alibaba-bold font-medium tabular-nums @[250px]/card:text-3xl">
            1,250.00 <span className="text-gray-400 text-lg alibaba-regular"> تومان</span>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            این ماه روند افزایشی داشته اید
            <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">جمع فروش 6 ماه گذشته</div>
        </CardFooter>
      </Card>
    </div>
  );
}
