package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashSet;

public class S3_13414 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] kl = br.readLine().split(" ");
        int k = Integer.parseInt(kl[0]);
        int l = Integer.parseInt(kl[1]);

        LinkedHashSet<String> set = new LinkedHashSet<>();
        for(int i=0; i<l; i++){
            String str = br.readLine();
            if(set.contains(str)) {
                set.remove(str);
            }
            set.add(str);
        }

        int count = 0;
        for(String x : set){
            count++;
            System.out.println(x);
            if(count == k) break;
        }
    }
}
