import useSampleStore from "@/features/sample/store";
import "@/features/sample/components/sampleCountDisplay.scss";

const SampleCountDisplay: React.FC = () => {
  const count = useSampleStore((state) => state.count);

  return <div className="sample-count-display">Sample count: {count}</div>;
};

export default SampleCountDisplay;
