package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class S5_11536 {
    static int n;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());

        String[] arr = new String[n];
        String[] origin = new String[n];

        for(int i = 0; i < n; i++) {
            arr[i] = br.readLine();
            origin[i] = arr[i];
        }

        Arrays.sort(arr);

        if(checkCreasing(arr, origin)) {
            System.out.println("INCREASING");
            return;
        }

        Arrays.sort(arr, Comparator.reverseOrder());

        if(checkCreasing(arr, origin)) {
            System.out.println("DECREASING");
        } else {
            System.out.println("NEITHER");
        }
    }

    private static boolean checkCreasing(String[] arr, String[] origin) {
        for(int i = 0; i < n; i++) {
            if(!arr[i].equals(origin[i])) {
                return false;
            }
        }
        return true;
    }
}
