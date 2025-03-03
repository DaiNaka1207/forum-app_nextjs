const Title = ({ className }: { className?: string }) => {
  return (
    <h1 className={`text-xl font-bold ${className}`}>
      {process.env.APP_NAME}
    </h1>
  )
}

export default Title;
