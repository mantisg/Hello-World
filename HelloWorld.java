import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.HBox;
import javafx.scene.control.Label;
import javafx.geometry.Pos;
public class HelloWorld extends Application{
    public static void main(String[] args){
        launch(args);
    }
    @Override
    public void start(Stage primaryStage){
        //create label
        Label messageLabel = new Label("Twat Waffle");
        //put label in hbox
        HBox hbox = new HBox(messageLabel);
        //put hbox in scene
        Scene scene = new Scene(hbox, 300, 100);
        //align scene
        hbox.setAlignment(Pos.CENTER);
        //add to stage
        primaryStage.setScene(scene);
        //set title
        primaryStage.setTitle("GUI bitch");
        //show
        primaryStage.show();
    }
}