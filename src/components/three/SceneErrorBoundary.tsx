"use client";

import { Component, type ReactNode } from "react";
import { ScenePlaceholder } from "./ScenePlaceholder";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches WebGL/renderer failures (old devices, blocked contexts) and
 * swaps the 3D scene for the static placeholder instead of crashing
 * the page.
 */
export class SceneErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <ScenePlaceholder />;
    return this.props.children;
  }
}
