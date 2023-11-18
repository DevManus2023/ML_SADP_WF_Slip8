/*SLIP 2 & 8:
 * Q.1 Write a Java Program to implement Singleton pattern for multithreading.
 */
class SingleObject {
    private static volatile SingleObject instance;

    private SingleObject() {}

    public static SingleObject getInstance() {
        if (instance == null) {
            synchronized (SingleObject.class) {
                if (instance == null) {
                    instance = new SingleObject();
                }
            }
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Hello World!");
    }
}

public class SingletonMultithread {
    public static void main(String[] args) {
        SingleObject object = SingleObject.getInstance();

        object.showMessage();
    }
}
