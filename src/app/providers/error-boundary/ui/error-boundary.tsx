import { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import { DisplayError } from 'widgets/display-error'
import { PageLoader } from 'widgets/page-loader'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Suspense fallback={<PageLoader />}>
          <DisplayError />
        </Suspense>
      )
    }
    return this.props.children
  }
}
