import { Card } from "@/components/ui/card";

export function ChartPlaceholder() {
  return (
    <Card className="glass-card p-0 overflow-hidden border-0 shadow-xl">
      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <span className="text-white text-lg font-semibold opacity-80 animate-pulse">
          <div className="flex flex-col h-48 justify-between w-full">
      <div className="flex items-end justify-between h-36 gap-2 pt-4 px-2">
        {[45, 65, 35, 85, 55, 75, 90, 60, 40, 80, 70, 85].map((val, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end group relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] px-1.5 py-0.5 rounded shadow border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono">{val}%</div>
            <div 
              style={{ height: `${val}%` }} 
              className="w-full rounded-t-sm bg-gradient-to-t from-primary/30 to-primary group-hover:to-accent-foreground transition-all duration-500 ease-out hover:scale-x-105"
            />
            <span className="text-[9px] text-muted-foreground mt-2 font-mono">{["J","F","M","A","M","J","J","A","S","O","N","D"][idx]}</span>
          </div>
        ))}
      </div>
    </div>
        </span>
      </div>
    </Card>
  );
}
