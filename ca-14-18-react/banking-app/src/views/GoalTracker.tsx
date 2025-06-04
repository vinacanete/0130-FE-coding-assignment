import SavingGoal from '../components/SavingGoal';

export default function GoalTracker() {
    return (
        <div className="container-fluid p-5 bg-dark" style={{ height: "80vw" }}>
            <div className="row p-3 pb-5 bg-light rounded">
                <SavingGoal />
            </div>
        </div >
    );
}