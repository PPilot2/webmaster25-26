import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Worklog() {
  return (
    <div>
      <Navigation></Navigation>
      <main className="worklogContainer">
        <h1 className="worklogHeader">
          Technology Student Association Work Log
        </h1>
        <table>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Time Involved</th>
            <th>Team Members Responsible (student initials)</th>
            <th>Comments</th>
          </tr>

          <tr>
            <td>9/21/25 - 9/26/25</td>
            <td>Brainstorming</td>
            <td>4 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Reviewed event overview and requirements, generated ideas
              regarding our website, established a rudimentary timeline to
              complete tasks and website.
            </td>
          </tr>

          <tr>
            <td>10/01/25 - 10/07/25</td>
            <td>Initial Start</td>
            <td>10 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Began designing logo, established website name, outlined general
              website details.
            </td>
          </tr>

          <tr>
            <td>10/08/25 - 10/14/25</td>
            <td>Home Page</td>
            <td>15 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>Wrote content, sketched wireframe, and created home page.</td>
          </tr>

          <tr>
            <td>10/15/25 - 10/21/25</td>
            <td>Directory Page</td>
            <td>10 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Wrote content, sketched wireframe, and created Directory page.
            </td>
          </tr>

          <tr>
            <td>10/22/25 - 10/28/25</td>
            <td>Events Page</td>
            <td>14 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>Wrote content, sketched wireframe, and created Events page.</td>
          </tr>

          <tr>
            <td>11/01/25 - 11/07/25</td>
            <td>Support Services Page</td>
            <td>3 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Wrote content, sketched wireframe, and created Support Services
              page.
            </td>
          </tr>

          <tr>
            <td>11/08/25 - 11/14/25</td>
            <td>Suggest Resource Page</td>
            <td>3 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Wrote content, sketched wireframe, and created Suggest Resource
              page.
            </td>
          </tr>

          <tr>
            <td>11/15/25 - 11/28/25</td>
            <td>References Page</td>
            <td>3 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Wrote content, sketched wireframe, and created References page.
            </td>
          </tr>

          <tr>
            <td>11/29/25 - 12/30/25</td>
            <td>Quality Control</td>
            <td>15 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Troubleshooting, ensured consistent fonts/colors, addressed bugs.
            </td>
          </tr>

          <tr>
            <td>12/22/25 - 12/23/25</td>
            <td>Final Touches</td>
            <td>3 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>Added citations, updated images, proofread website.</td>
          </tr>

          <tr>
            <td>1/06/26 - 1/07/26</td>
            <td>Final Touches</td>
            <td>3 Hours</td>
            <td>PA, CX, AP, PC, BJ</td>
            <td>
              Final checks for bugs, information accuracy, and required
              documents.
            </td>
          </tr>
        </table>
      </main>
      <Footer></Footer>
    </div>
  );
}
