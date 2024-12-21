for dir in */; do
  if [ -d "$dir" ]; then
    cd "$dir"
    pnpm run serve &
    cd ..
  fi
done

