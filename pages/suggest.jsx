import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
export default function Suggest() {
  return (
    <div>
        <Navigation></Navigation>
        <main className="Container">
          <h1>Suggest a Resource</h1>
          <form action="" className="suggestForm">
            <section>
                <input type="text" name="Name" placeholder="Name"/>
                <input type="email" name="Email" placeholder="Email"/>
                <select
                    id="resCat"
                    name="resCat"
                    required="true"
                    data-form-field-id="resCat"
                >
                    <option value="true">Select a category</option>
                    <option value="food">Food &amp; Nutrition</option>
                    <option value="health">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="housing">Housing</option>
                    <option value="other">Other</option>
                </select> 
            </section>
            <section>
                <input type="text" name="Title" placeholder="Title of your suggestion"/>
            </section>
            <section>
                <textarea name="Suggestions" placeholder="Your suggestion"/>
            </section>
            <input type="submit"/>
          </form>
        </main>
        <Footer></Footer>
    </div>
  )
}
