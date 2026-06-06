function CourseSearch({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search Courses..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full p-3 border rounded-xl bg-white shadow-sm"
    />
  );
}

export default CourseSearch;