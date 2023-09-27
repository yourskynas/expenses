function Button({ title, onClick, type }) {
  return (
    <button
      type={type}
      onClick={(event) => onClick(event)}
      className="shadow rounded-md text-white font-medium bg-purple-600 col-span-1"
    >
      {title}
    </button>
  )
}

export default Button
