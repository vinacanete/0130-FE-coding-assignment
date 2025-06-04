import SavingGoal from '../components/SavingGoal';

export default function GoalTracker() {
    return (
        <div className="container-fluid p-5" id="bank-bg" style={{ height: "100vw" }}>
            <div className="row p-3 pb-5 bg-light rounded">
                <SavingGoal />
            </div>
        </div >
    );
}