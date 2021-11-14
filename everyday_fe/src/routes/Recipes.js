import RecipeList from '../components/RecipeList';

export default function Recipes() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Recipes</h2>
        <p>
          <RecipeList />
        </p>
      </main>
    );
  }