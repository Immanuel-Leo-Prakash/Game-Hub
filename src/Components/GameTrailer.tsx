import useTrailer from "../Hooks/useTrailer";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return first ? <video  controls   poster={first?.preview} src={first.data[480]} /> : null;
};

export default GameTrailer;
