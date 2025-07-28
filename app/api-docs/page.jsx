const ApiDocs = () => {
  return (
    <div>
      <iframe
        className="w-screen h-screen"
        src={process.env.NEXT_PUBLIC_API_DOCS_URL}
        title="api-doc"
      />
    </div>
  )
}

export default ApiDocs;
