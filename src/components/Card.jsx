const Card = ({ image, title, category }) => {
  const categoryLabel = Array.isArray(category)
    ? category.join(" · ")
    : category;

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-auto w-full grayscale transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="translate-y-4 px-4 text-center transition-transform duration-300 group-hover:translate-y-0">
            <div className="text-base font-bold text-white drop-shadow-md">
              {title}
            </div>
            {categoryLabel && (
              <div className="mt-1 text-sm font-medium text-neutral-200/90">
                {categoryLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
