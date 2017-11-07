import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JPanel;

import java.awt.Graphics;


public class TestFrame extends JPanel implements Runnable, KeyListener
{

	private static final long serialVersionUID = 3982934651356621030L;

	private JFrame frame;

	private Image avatar;
	private Image bgImage;

	private int x_img;
	private int widthImg;

	private double figur_y = 300;
	private int left;

	private int key;
	private int motionImg;
	private Thread thread;

	private boolean isFalling;
	private boolean isJumping;
	private double i;


	public TestFrame()
	{
		key = 0;
		motionImg = 0;
		widthImg = 800;

		// Hintergrundbild
		ImageIcon u = new ImageIcon("D:/DHBW/3. Semester/Software Engineering/superwoman2_preview.png");
		bgImage = u.getImage();

		// Spielfigur
		ImageIcon s = new ImageIcon("D:/DHBW/3. Semester/Software Engineering/character.png");
		avatar = s.getImage();

		thread = new Thread(this);
		thread.start();
	}


	public int getX_img()
	{
		return x_img;
	}


	@Override
	public void run()
	{
		while (true)
		{
			move();
			try
			{
				Thread.sleep(10);
			} catch (InterruptedException e)
			{
				System.out.println(e);
			}
			repaint();
		}

	}


	public void move()
	{
		// Spielfigur bewegen
		// läuft nicht/nach rechts
		if (motionImg != -3)
		{
			if ((left + motionImg) <= 150)
			{
				left += motionImg;
			} else
			{
				x_img -= motionImg;
			}
		} else
		{
			if ((left + motionImg) > 0)
			{
				left += motionImg;
			}
		}

		// Schrittweises Springen oder Fallen
		if (isJumping)
		{
			figur_y = figur_y - i * 0.05;
			i--;
		} else if (isFalling)
		{
			figur_y = figur_y + i * 0.05;
			i++;
		}

		// Randbedingungsabfragen
		if (isFalling || isJumping)
		{
			// Figur stoppt am Boden
			if (figur_y > 490 - figur_y / 1.6)
			{
				figur_y = 490 - figur_y / 1.6;
				isFalling = false;
				i = 0;
			}
			// Figur kann nicht aus oberen Rand raus springen
			if (figur_y < 0)
			{
				isJumping = false;
				isFalling = true;
				i = i / 2;
			}
			// Wenn Sprunghöhe erreicht ist fängt die Figur an zu fallen
			if (i == 0 && (isFalling || isJumping))
			{
				isJumping = false;
				isFalling = true;

			}
		}
	}


	public void createFrame()
	{
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
	public void paint(Graphics g)
	{
		super.paint(g);
		Graphics2D f2 = (Graphics2D) g;

		// Hintergrund wiederholen
		for (int i = 0; i < 30; i++)
		{
			f2.drawImage(bgImage, x_img + i * widthImg, 0, null);
		}

		f2.drawImage(avatar, left, (int) figur_y, null);
	}


	@Override
	public void keyPressed(KeyEvent e)
	{
		key = e.getKeyCode();

		if (key == KeyEvent.VK_LEFT)
		{
			motionImg = -3;
		}
		if (key == KeyEvent.VK_RIGHT)
		{
			motionImg = +3;
		}
		if (key == KeyEvent.VK_SPACE)
		{
			if (!isJumping && !isFalling)
			{
				isJumping = true;
				i = 80;
			}

		}
	}


	@Override
	public void keyReleased(KeyEvent e)
	{
		key = e.getKeyCode();

		if (key == KeyEvent.VK_LEFT || key == KeyEvent.VK_RIGHT)
		{
			motionImg = 0;
		}
		if (key == KeyEvent.VK_ESCAPE)
		{
			System.exit(0);
		}
	}


	@Override
	public void keyTyped(KeyEvent e)
	{

	}

}