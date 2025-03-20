const PopulatArticle = (props: { className?: string }) => {
  return (
    <li className={`flex gap-4 py-3.5 items-center ${props.className}`}>
      <img
        className="w-40 h-32"
        src="/blog/popular-article.png"
        alt="ihelp afrika popular article"
      />
      <div>
        <h5 className="font-medium text-sm">SRH Education</h5>
        <p className="w-full overflow-hidden font-light text-xs line-clamp-5">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </li>
  );
};

export default PopulatArticle;
