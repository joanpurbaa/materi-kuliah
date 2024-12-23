import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try(Scanner userInput = new Scanner(System.in)){
            int ukuran = userInput.nextInt();
            String benda[] = new String[ukuran];
            int counter = 0;

            while(ukuran != counter){
                benda[counter] = userInput.next();
                counter++;
            }

            for(int i = 0; i < benda.length; i++){
                for(int j = 0; j < benda.length - i - 1; j++){
                    if(compareTo(benda[j], benda[j + 1]) > 0){
                        String temp = benda[j];
                        benda[j] = benda[j + 1];
                        benda[j + 1] = temp;
                    }
                }
            }

            for (String i : benda) {
                System.out.print(i + " ");
            }
        }
    }

    public static int compareTo(String s1, String s2) {
        for (int i = 0; i < Math.min(s1.length(), s2.length()); i++) {
            int diff = s1.charAt(i) - s2.charAt(i);
            if (diff != 0) return diff;
        }
        
        return s1.length() - s2.length();
    }
}
