import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JPanel;

import java.awt.Graphics;

public class TestFrame extends JPanel implements Runnable, KeyListener {
	JFrame frame;

	Image avatar;
	Image bgImage;
	int x_img;
	int widthImg;

	int figur_y = 300;
	int left; 

	int key;
	int motionImg;
	Thread thread;

	public TestFrame() {
		key = 0;
		motionImg = 0;
		widthImg = 800;

		// Hintergrundbild
		ImageIcon u = new ImageIcon(
				"D:/syncplicity/z003nfpd/Documents/DHBW/2.Semester/Software Engineering/superwoman2_preview.png");
		bgImage = u.getImage();

		// Spielfigur
		ImageIcon s = new ImageIcon(
				"D:/syncplicity/z003nfpd/Documents/DHBW/1.Semester/DHBW-Programmieren/character.png");
		avatar = s.getImage();

		thread = new Thread(this);
		thread.start();
	}

	public int getX_img() {
		return x_img;
	}

	@Override
	public void run() {
		while (true) {
			move();
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {
				System.out.println(e);
			}
			repaint();
		}

	}

	public void move() {
		// Spielfigur bewegen
		//läuft nicht/nach rechts
		if (motionImg != -3) { 
			if ((left + motionImg) <= 150) {
				left += motionImg;
			} else {
				x_img -= motionImg;
			}
		}
		else {
			if ((left + motionImg) > 0) {
				left += motionImg;
			}
		}
	}

	public void createFrame() {
		frame = new JFrame();
		frame.setTitle("Super Woman");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.add(this);

		frame.setSize(820, 490);
		frame.addKeyListener(this);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}

	@Override
	public void paint(Graphics g) {
		super.paint(g);
		Graphics2D f2 = (Graphics2D) g;
		
		// Hintergrund wiederholen
		for (int i = 0; i < 30; i++) { 
			f2.drawImage(bgImage, x_img + i * widthImg, 0, null);
		}

		f2.drawImage(avatar, left, figur_y, null);
	}

	@Override
	public void keyPressed(KeyEvent e) {
		key = e.getKeyCode();

		if (key == KeyEvent.VK_LEFT) {
			motionImg = -3;
		}
		if (key == KeyEvent.VK_RIGHT) {
			motionImg = +3;
		}
	}

	@Override
	public void keyReleased(KeyEvent e) {
		key = e.getKeyCode();
		
		if (key == KeyEvent.VK_LEFT || key == KeyEvent.VK_RIGHT) {
			motionImg = 0;
		}
	}

	@Override
	public void keyTyped(KeyEvent e) {

	}

}