export default function FoodBox({food, handleDelete}) {
    const {
        id,
        name,
        image,
        calories,
        servings
    } = food

    return (
		<>
            <div>
                <p>{name}</p>

                <img src={image} />

                <p>Calories: {calories}</p>
                <p>Servings {servings}</p>

                <p>
                    <b>Total Calories: {calories * servings} </b> kcal
                </p>

                <button onClick={(event) => handleDelete(event, id)}>Delete</button>
            </div>
		</>
	)
}
