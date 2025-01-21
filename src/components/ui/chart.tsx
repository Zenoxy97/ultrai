import * as React from 'react';
import { 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LegendProps
} from 'recharts';

import { cn } from '@/lib/utils';

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
} as const;

interface ChartConfig {
  label?: React.ReactNode;
  icon?: React.ComponentType;
  color?: string;
  theme?: keyof typeof THEMES;
}

interface ChartContextProps {
  config: Record<string, ChartConfig>;
}

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error('useChart must be used within a ChartContainer');
  }
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: Record<string, ChartConfig>;
    children: React.ComponentProps<
      typeof ResponsiveContainer
    >['children'];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const chartId = React.useId();

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        className={cn(
          'w-full h-full',
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = 'ChartContainer';

function ChartStyle({ id, config }: { id: string; config: Record<string, ChartConfig> }) {
  const styles = Object.entries(config)
    .filter(([, config]) => config.color)
    .map(
      ([key, config]) => `
        [data-id="${id}"] [data-color="${key}"] {
          color: ${config.color};
          fill: ${config.color};
          stroke: ${config.color};
        }
      `
    )
    .join('\n');

  if (!styles) {
    return null;
  }

  return (
    <style dangerouslySetInnerHTML={{ __html: styles }} />
  );
}

const ChartTooltip = Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    className?: string;
    items?: Array<{
      value: string;
      id: string | number;
      color?: string;
    }>;
  }
>(({ className, items }, ref) => {
  const { config } = useChart();

  if (!items?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-4',
        className
      )}
    >
      {items.map((item) => {
        const key = `${item.id}`;
        const itemConfig = config[key];

        return (
          <div
            key={item.id}
            className={cn(
              'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'
            )}
          >
            {itemConfig?.icon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartTooltipContent.displayName = 'ChartTooltip';

const ChartLegend = Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  Omit<LegendProps, 'content'> &
    React.ComponentProps<'div'> & {
      className?: string;
      items?: Array<{
        value: string;
        id: string | number;
        color?: string;
      }>;
    }
>(({ className, items }, ref) => {
  const { config } = useChart();

  if (!items?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-4',
        className
      )}
    >
      {items.map((item) => {
        const key = `${item.id}`;
        const itemConfig = config[key as keyof typeof config];

        return (
          <div
            key={item.id}
            className={cn(
              'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'
            )}
          >
            {itemConfig?.icon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = 'ChartLegend';

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
