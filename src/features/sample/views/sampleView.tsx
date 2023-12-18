import SampleCountDisplay from "@/features/sample/components/sampleCountDisplay";
import useSampleStore from "@/features/sample/store";
import "@/features/sample/views/sampleView.scss";

const SampleView: React.FC = () => {

    const sampleStore = useSampleStore();

    return <div className="sample-view">
        <SampleCountDisplay />
        <button onClick={() => sampleStore.actions.increment()}>
          Increment
        </button>
        <button onClick={() => sampleStore.actions.decrement()}>
          Decrement
        </button>
    </div>
}

export default SampleView;