export default function MemberBar({
  maxNumber,
  number,
}: {
  maxNumber: number;
  number: number;
}) {
  const percentage = (number / maxNumber) * 100;

  const r = Math.round((255 * (100 - percentage)) / 100);
  const g = Math.round((255 * percentage) / 100);
  const b = 0;

  const styles = {
    width: `${percentage}%`,
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  return (
    <span className="inline-block h-[5px] w-full">
      <span style={styles} className="block rounded-full h-full"></span>
    </span>
  );
}
