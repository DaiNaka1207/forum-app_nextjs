const Form = ({ className, action, method }: { className?: string, action?: string, method?: string }) => {
  return (
    <form className={`${className}`} action={`${action}`} method={`${method}`}>
      <div className="my-3">
        <label htmlFor="username" className="block text-xs mb-0.5 text-gray-400 font-bold">
          名前
        </label>
        <input
          id="username"
          type="text"
          name="username"
          className="w-full border border-gray-300 focus:outline-blue-400 rounded-md px-3 py-2"
          autoFocus
        />
      </div>

      <div className="my-3">
        <label htmlFor="title" className="block text-xs mb-0.5 text-gray-400 font-bold">
          タイトル
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="w-full border border-gray-300 focus:outline-blue-400 rounded-md px-3 py-2"
        />
      </div>

      <div className="my-3">
        <label htmlFor="content" className="block text-xs mb-0.5 text-gray-400 font-bold">
          内容
        </label>
        <textarea
          id="content"
          name="content"
          className="w-full border border-gray-300 focus:outline-blue-400 rounded-md px-3 py-2 field-sizing-content resize-none"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-blue-800">
        投稿
      </button>
    </form>
  );
};

export default Form;
