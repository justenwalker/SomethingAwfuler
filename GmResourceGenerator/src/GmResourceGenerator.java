/*
	GmResourceGenerator - Generates resource URLs for use in Greasemonkey scripts
    Copyright (C) 2010  Justen Walker

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */
import javax.activation.MimetypesFileTypeMap;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;

import org.apache.commons.codec.binary.Base64;

public class GmResourceGenerator {
	public static void main(String[] args) {
		if( args.length != 1 ) {
			System.err.println("Please provide a file to convert to base64");
			return;
		}
		String filename = args[0];
		try {
			File f = new File(filename);
			
			// Get File's MIME Type
			String mime = new MimetypesFileTypeMap().getContentType(f);
			
			// Create URL-Safe Base64 Encoded Link
			byte[] fileBytes = readFileBytes(f);
			String b64 = URLEncoder.encode(Base64.encodeBase64String(fileBytes),"utf-8");
			System.out.print("data:" + mime + ";base64," + b64);
			
		} catch (IOException e) {
			System.err.println("Could not read file " + filename);
			System.err.println(e.toString());
		}
	}
	
	public static byte[] readFileBytes(File file) throws IOException {
		InputStream inStream = new FileInputStream(file);
		long fileLen = file.length();

		// Check if the file length can be safely converted to an integer
		if( fileLen > Integer.MAX_VALUE ) { throw new IOException("File size is larger than this program supports"); }
		
		// Setup file buffer
		byte[] bytes = new byte[(int)fileLen];
		int offset = 0;
		int read = 0;
		while( 
				(offset < bytes.length) &&
				((read=inStream.read(bytes,offset,bytes.length-offset)) >= 0)
		) {
			offset += read;
		}
		
		if( offset < bytes.length ) { throw new IOException("Could not read entire file " + file.getName()); }

		inStream.close();
		return bytes;
		
	}

}
