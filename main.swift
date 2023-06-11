import SwiftUI

struct ContentView: View {
    let names = ["Juan", "María", "Pedro", "Ana", "Luis"]

    var body: some View {
        List(names, id: \.self) { name in
            Text(name)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}