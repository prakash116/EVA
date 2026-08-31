import { Cross } from "lucide-react";

/**
 * Static stand-in shown while a 3D scene chunk loads — and as the
 * graceful fallback when WebGL isn't available.
 */
export function ScenePlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center"
    >
      <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-mint-100 sm:h-72 sm:w-72">
        <div className="absolute inset-6 rounded-full bg-mint-50" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-leaf-500 shadow-soft">
          <Cross className="h-9 w-9 text-white" strokeWidth={2.5} />
        </div>
        <span className="absolute right-8 top-10 h-3 w-3 rounded-full bg-leaf-400" />
        <span className="absolute bottom-12 left-8 h-2.5 w-2.5 rounded-full bg-med-500/60" />
      </div>
    </div>
  );
}
