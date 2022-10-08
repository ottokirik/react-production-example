export const stopClickBubbling = <T, E>(event: React.MouseEvent<T, E>): void => {
  event.stopPropagation()
}
