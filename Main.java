import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> nilaiMahasiswa = new ArrayList<>();
        
        nilaiMahasiswa.add(1);
        nilaiMahasiswa.add(3);
        nilaiMahasiswa.add(5);
        nilaiMahasiswa.add(-8);
        nilaiMahasiswa.add(12);
        nilaiMahasiswa.add(90);
        nilaiMahasiswa.add(3);
        nilaiMahasiswa.add(7);

        int target = 5;
        boolean ditemukan = false;

        for (int i = 0; i < nilaiMahasiswa.size(); i++) {
            if (nilaiMahasiswa.get(i) == target) {
                System.out.println("Ditemukan di indeks ke-" + i);
                ditemukan = true;
                break;
            }
        }

        if (!ditemukan) {
            System.out.println("Tidak ditemukan");
        }
    }
}
