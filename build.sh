for dir in */; do
  if [ -d "$dir" ]; then
    cd "$dir"
    pnpm i && pnpm build
    cd ..
  fi
done
