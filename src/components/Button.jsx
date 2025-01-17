function Button(props) {
  return <button {...props} className="bg-violet-600 p-2 rounded-md text-white">
    {props.children}
  </button>;
}

export default Button;
