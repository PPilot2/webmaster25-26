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
